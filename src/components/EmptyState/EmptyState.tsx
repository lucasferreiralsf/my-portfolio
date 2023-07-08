import { EmojiSad } from 'iconsax-react'
import React from 'react'

type Props = {
  text?: string
}
export const EmptyState: React.FC<Props> = ({ text = "Sorry, I couldn't show you anything" }) => {
  return (
    <div className="flex flex-col items-center px-12 text-slate-400">
      <EmojiSad size="40%" variant="Bulk" />
      <p className="text-center text-sm mt-4">{text}</p>
    </div>
  )
}
