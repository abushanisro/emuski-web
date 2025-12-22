'use client'

import React from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

interface PhoneInputComponentProps {
  value: string;
  onChange: (value: string | undefined) => void;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  id?: string;
  name?: string;
}

export const PhoneInputComponent: React.FC<PhoneInputComponentProps> = ({
  value,
  onChange,
  placeholder = '+1 (555) 123-4567',
  required = false,
  disabled = false,
  className = '',
  id = 'phone',
  name = 'phone',
}) => {
  return (
    <div className={`phone-input-wrapper ${className}`}>
      <PhoneInput
        international
        countryCallingCodeEditable={false}
        defaultCountry="IN"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        id={id}
        name={name}
        className="phone-input-custom"
        countrySelectProps={{
          className: 'country-select-custom',
        }}
        numberInputProps={{
          className: 'phone-number-input-custom',
        }}
      />
      <style jsx global>{`
        /* Phone Input Container */
        .phone-input-wrapper {
          position: relative;
          width: 100%;
        }

        /* Main Phone Input */
        .PhoneInput {
          display: flex;
          align-items: center;
          width: 100%;
          border: 1px solid rgb(209, 213, 219);
          border-radius: 0.5rem;
          padding: 0.5rem 0.75rem;
          font-size: 0.875rem;
          transition: all 0.2s;
          background-color: white;
        }

        .PhoneInput:focus-within {
          outline: none;
          ring: 2px;
          ring-color: #009688;
          border-color: transparent;
          box-shadow: 0 0 0 2px rgba(0, 150, 136, 0.2);
        }

        /* Country Select Dropdown */
        .PhoneInputCountry {
          position: relative;
          align-self: stretch;
          display: flex;
          align-items: center;
          margin-right: 0.5rem;
        }

        .PhoneInputCountryIcon {
          width: 1.5rem;
          height: 1.5rem;
          border-radius: 0.25rem;
          overflow: hidden;
          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
        }

        .PhoneInputCountryIcon--border {
          background-color: rgba(0, 0, 0, 0.1);
          box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
        }

        .PhoneInputCountryIconImg {
          display: block;
          width: 100%;
          height: 100%;
        }

        /* Country Select Button */
        .PhoneInputCountrySelect {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          z-index: 1;
          border: 0;
          opacity: 0;
          cursor: pointer;
        }

        .PhoneInputCountrySelect:focus + .PhoneInputCountryIcon {
          outline: 2px solid #009688;
          outline-offset: 2px;
        }

        .PhoneInputCountrySelectArrow {
          display: block;
          content: '';
          width: 0.375rem;
          height: 0.375rem;
          margin-left: 0.375rem;
          border-style: solid;
          border-color: rgb(107, 114, 128);
          border-top-width: 0;
          border-bottom-width: 2px;
          border-left-width: 0;
          border-right-width: 2px;
          transform: rotate(45deg);
          opacity: 0.7;
        }

        /* Phone Number Input Field */
        .PhoneInputInput {
          flex: 1;
          min-width: 0;
          border: none;
          outline: none;
          font-size: 0.875rem;
          padding: 0;
          background: transparent;
        }

        .PhoneInputInput::placeholder {
          color: rgb(156, 163, 175);
        }

        /* Disabled State */
        .PhoneInput--disabled {
          background-color: rgb(243, 244, 246);
          cursor: not-allowed;
          opacity: 0.6;
        }

        .PhoneInput--disabled .PhoneInputInput {
          cursor: not-allowed;
        }

        /* Error State */
        .PhoneInput--error {
          border-color: rgb(239, 68, 68);
        }

        .PhoneInput--error:focus-within {
          ring-color: rgb(239, 68, 68);
        }

        /* Country Dropdown Menu (when opened) */
        .PhoneInputCountrySelect option {
          padding: 0.5rem;
          font-size: 0.875rem;
        }

        /* Hover Effects */
        .PhoneInputCountry:hover .PhoneInputCountrySelectArrow {
          opacity: 1;
          border-color: #009688;
        }

        /* Mobile Responsiveness */
        @media (max-width: 640px) {
          .PhoneInput {
            font-size: 1rem;
          }

          .PhoneInputInput {
            font-size: 1rem;
          }
        }

        /* Focus visible for accessibility */
        .PhoneInputCountrySelect:focus-visible {
          outline: 2px solid #009688;
          outline-offset: 2px;
        }

        /* Loading State (optional) */
        .PhoneInput--loading {
          opacity: 0.7;
          pointer-events: none;
        }

        /* Success State (optional) */
        .PhoneInput--success {
          border-color: rgb(34, 197, 94);
        }

        .PhoneInput--success:focus-within {
          ring-color: rgb(34, 197, 94);
        }

        /* EMUSKI Brand Color */
        .PhoneInput:focus-within {
          border-color: #009688;
        }

        .PhoneInputCountrySelect:focus + .PhoneInputCountryIcon + .PhoneInputCountrySelectArrow {
          border-color: #009688;
        }
      `}</style>
    </div>
  );
};

export default PhoneInputComponent;
