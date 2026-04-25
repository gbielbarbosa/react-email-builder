import { InspectorSection, InspectorSelect, InspectorToggleGroup, InspectorToggleItem } from './InspectorPrimitives';
import { AlignCenterIcon, AlignCenterVerticalIcon, AlignEndVerticalIcon, AlignLeftIcon, AlignRightIcon, AlignStartVerticalIcon } from '@react-email/editor/ui';
import { KnownThemeComponents } from '@react-email/editor/plugins';

const ALIGNMENT_ITEMS = [
  {
    value: "left",
    alternativeIcon: AlignLeftIcon,
    icon: AlignStartVerticalIcon
  },
  {
    value: "center",
    alternativeIcon: AlignCenterIcon,
    icon: AlignCenterVerticalIcon
  },
  {
    value: "right",
    alternativeIcon: AlignRightIcon,
    icon: AlignEndVerticalIcon
  }
];

const FONT_FAMILIES = [
  { value: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', label: 'System UI' },
  { value: 'Arial, Helvetica, sans-serif', label: 'Arial' },
  { value: '"Helvetica Neue", Helvetica, sans-serif', label: 'Helvetica Neue' },
  { value: 'Georgia, "Times New Roman", serif', label: 'Georgia' },
  { value: 'Verdana, Geneva, sans-serif', label: 'Verdana' },
  { value: 'Tahoma, Geneva, sans-serif', label: 'Tahoma' },
  { value: '"Trebuchet MS", Helvetica, sans-serif', label: 'Trebuchet MS' },
  { value: '"Times New Roman", Times, serif', label: 'Times New Roman' },
  { value: '"Courier New", Courier, monospace', label: 'Courier New' },
];

const FONT_WEIGHTS = [
  { value: '300', label: 'Light (300)' },
  { value: '400', label: 'Regular (400)' },
  { value: '500', label: 'Medium (500)' },
  { value: '600', label: 'Semi Bold (600)' },
  { value: '700', label: 'Bold (700)' },
  { value: '800', label: 'Extra Bold (800)' },
];

/**
 * Inspector panel section for document-level email settings:
 * meta title, content alignment, font family, and font weight.
 * These are stored in `globalContent.data.body`.
 */

interface InspectorDocumentContext {
  setGlobalStyle: (classReference: KnownThemeComponents, property: any, value: unknown) => void;
  findStyleValue: (classReference: KnownThemeComponents, prop: any) => any;
  [key: string]: any;
}

export function BodyExtras({ findStyleValue, setGlobalStyle }: InspectorDocumentContext) {
  return (
    <InspectorSection title='Email settings'>
      <InspectorToggleGroup label='Content align'>
        {ALIGNMENT_ITEMS.map((item, index) => (
          <InspectorToggleItem
            key={item.value}
            isActive={findStyleValue("body", "align") === item.value}
            onClick={(e) => setGlobalStyle("body", "align", item.value)}>
            <item.icon size={16} />
          </InspectorToggleItem>
        ))}
      </InspectorToggleGroup>
      <InspectorSelect
        label='Font family'
        value={findStyleValue("body", "fontFamily")}
        onChange={(e) => setGlobalStyle("body", 'fontFamily', e.target.value)}
      >
        {FONT_FAMILIES.map((f) => (
          <option key={f.value} value={f.value}>{f.label}</option>
        ))}
      </InspectorSelect>
      <InspectorSelect
        label='Font weight'
        value={findStyleValue("body", "fontWeight") || '400'}
        onChange={(e) => setGlobalStyle("body", 'fontWeight', e.target.value)}
      >
        {FONT_WEIGHTS.map((w) => (
          <option key={w.value} value={w.value}>{w.label}</option>
        ))}
      </InspectorSelect>
    </InspectorSection>
  );
};
