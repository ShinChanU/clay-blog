#!/bin/bash
input=$(cat)
filepath=$(echo "$input" | jq -r '.filePath // empty')

if [[ -z "$filepath" || ( "$filepath" != *.ts && "$filepath" != *.tsx ) ]]; then
  echo '{"additional_context":""}'
  exit 0
fi

warnings=""

# shared/ → entities, widgets 참조 금지
if [[ "$filepath" == *src/shared/* ]]; then
  if grep -qE "from '@/(entities|widgets)" "$filepath" 2>/dev/null; then
    warnings="FSD VIOLATION: shared/ layer imports from entities/ or widgets/. Dependency must flow downward only: app → widgets → entities → shared."
  fi
fi

# entities/ → widgets 참조 금지
if [[ "$filepath" == *src/entities/* ]]; then
  if grep -q "from '@/widgets" "$filepath" 2>/dev/null; then
    warnings="FSD VIOLATION: entities/ layer imports from widgets/. Dependency must flow downward only."
  fi
fi

if [[ -n "$warnings" ]]; then
  echo "{\"additional_context\":\"$warnings\"}"
else
  echo '{"additional_context":""}'
fi
exit 0
