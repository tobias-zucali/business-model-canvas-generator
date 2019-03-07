import { ReactComponent as FormatBold } from 'icons/formatBold.svg'
import { ReactComponent as FormatHeader } from 'icons/formatSize.svg'
import { ReactComponent as FormatItalic } from 'icons/formatItalic.svg'
import { ReactComponent as FormatListBulleted } from 'icons/formatListBulleted.svg'
import { ReactComponent as FormatListNumbered } from 'icons/formatListNumbered.svg'
import { ReactComponent as FormatQuote } from 'icons/formatQuote.svg'
import { ReactComponent as FormatStrikethrough } from 'icons/formatStrikethrough.svg'
import { ReactComponent as FormatUnderlined } from 'icons/formatUnderlined.svg'


export const blockControlTypes = [
  {
    label: 'Header',
    style: 'header-three',
    Icon: FormatHeader,
  },
  {
    label: 'Blockquote',
    style: 'blockquote',
    Icon: FormatQuote,
  },
  {
    label: 'UL',
    style: 'unordered-list-item',
    Icon: FormatListBulleted,
  },
  {
    label: 'OL',
    style: 'ordered-list-item',
    Icon: FormatListNumbered,
  },
]

export const inlineControlTypes = [
  {
    label: 'Bold',
    style: 'BOLD',
    Icon: FormatBold,
  },
  {
    label: 'Italic',
    style: 'ITALIC',
    Icon: FormatItalic,
  },
  {
    label: 'Underline',
    style: 'UNDERLINE',
    Icon: FormatUnderlined,
  },
  {
    label: 'Strikethrough',
    style: 'STRIKETHROUGH',
    Icon: FormatStrikethrough,
  },
]
