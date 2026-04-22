#!/bin/bash
input=$(cat)
filepath=$(echo "$input" | jq -r '.filePath // empty')

if [[ -z "$filepath" ]]; then
  echo '{"additional_context":""}'
  exit 0
fi

if [[ "$filepath" != *.tsx && "$filepath" != *.ts ]]; then
  echo '{"additional_context":""}'
  exit 0
fi

# page.tsx나 layout.tsx에 'use client'가 있으면 경고
if [[ "$filepath" == *page.tsx || "$filepath" == *layout.tsx ]]; then
  if grep -q "'use client'" "$filepath" 2>/dev/null; then
    echo "{\"additional_context\":\"WARNING: '$filepath' is a page/layout with 'use client'. This violates the Server Component default rule. Extract interactive parts into a separate Client Component in entities/ or shared/ui/.\"}"
    exit 0
  fi
fi

# shared/utils/ 에서 'use client' 사용 감지
if [[ "$filepath" == *shared/utils/* ]]; then
  if grep -q "'use client'" "$filepath" 2>/dev/null; then
    echo "{\"additional_context\":\"WARNING: '$filepath' is a utility file with 'use client'. Utilities in shared/utils/ must be Server-compatible.\"}"
    exit 0
  fi
fi

echo '{"additional_context":""}'
exit 0
