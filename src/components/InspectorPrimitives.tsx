/**
 * InspectorPrimitives.tsx
 *
 * Thin wrapper components over the `data-re-inspector-*` attribute API used
 * by @react-email/editor's inspector CSS. The library does NOT export React
 * components for these primitives - it only applies styles via CSS attribute
 * selectors. These wrappers give us a typed, reusable API so we don't have to
 * copy raw data-attributes in every custom panel.
 */

import React from 'react';

// ---------------------------------------------------------------------------
// Section
// ---------------------------------------------------------------------------

interface InspectorSectionProps {
  title: string;
  children: React.ReactNode;
}

export const InspectorSection: React.FC<InspectorSectionProps> = ({ title, children }) => (
  <div data-re-inspector-section="" data-has-title="">
    <div data-re-inspector-section-header="">
      <button type="button" data-re-inspector-section-toggle="">
        <span data-re-inspector-text="">{title}</span>
      </button>
    </div>
    <div data-re-inspector-section-body="">
      {children}
    </div>
  </div>
);

// ---------------------------------------------------------------------------
// Row  (label + control side by side)
// ---------------------------------------------------------------------------

interface InspectorRowProps {
  label: string;
  children: React.ReactNode;
}

export const InspectorRow: React.FC<InspectorRowProps> = ({ label, children }) => (
  <div data-re-inspector-prop-row="">
    <label data-re-inspector-label="">{label}</label>
    {children}
  </div>
);

// ---------------------------------------------------------------------------
// Text input (full-width variant used for strings like metaTitle)
// ---------------------------------------------------------------------------

interface InspectorTextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const InspectorTextInput: React.FC<InspectorTextInputProps> = ({ label, ...inputProps }) => (
  <div data-re-inspector-prop-row="">
    <label data-re-inspector-label="">{label}</label>
    <div data-re-inspector-number="" style={{ flex: 1 }}>
      <input
        data-re-inspector-input
        type="text"
        style={{ width: '100%', maxWidth: 'unset' }}
        {...inputProps}
      />
    </div>
  </div>
);

// ---------------------------------------------------------------------------
// Select
// ---------------------------------------------------------------------------

interface InspectorSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  children: React.ReactNode;
}

export const InspectorSelect: React.FC<InspectorSelectProps> = ({ label, children, ...selectProps }) => (
  <div data-re-inspector-prop-row="">
    <label data-re-inspector-label="">{label}</label>
    <div data-re-inspector-select="">
      <select
        data-re-inspector-input
        style={{ background: 'transparent', border: 'none', outline: 'none', fontSize: '0.75rem', color: 'inherit', cursor: 'pointer', maxWidth: '9rem' }}
        {...selectProps}
      >
        {children}
      </select>
    </div>
  </div>
);

// ---------------------------------------------------------------------------
// Toggle-group  (used for column count / alignment buttons)
// ---------------------------------------------------------------------------

interface InspectorToggleGroupProps {
  label: string;
  children: React.ReactNode;
}

export const InspectorToggleGroup: React.FC<InspectorToggleGroupProps> = ({ label, children }) => (
  <div data-re-inspector-prop-row="">
    <label data-re-inspector-label="">{label}</label>
    <div data-re-inspector-toggle-group="">
      {children}
    </div>
  </div>
);

interface InspectorToggleItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean;
}

export const InspectorToggleItem: React.FC<InspectorToggleItemProps> = ({ isActive, children, ...rest }) => (
  <button
    type="button"
    data-re-inspector-toggle-item=""
    {...(isActive ? { 'data-active': '' } : {})}
    {...rest}
  >
    {children}
  </button>
);
