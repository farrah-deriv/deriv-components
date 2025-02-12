import { useState, HtmlHTMLAttributes } from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import classNames from 'classnames';
import css from './checkbox.module.scss';
import CheckIconSVG from '../../../images/svg/checkbox-icon.svg';
import CheckIndetermineIconSVG from '../../../images/svg/checkbox-indetermine-icon.svg';

export const CheckBox = CheckboxPrimitive.Root;

export interface CheckboxProps extends HtmlHTMLAttributes<HTMLInputElement> {
    dark?: boolean;
    indetermine?: boolean;
    check?: boolean;
    size?: 'default' | 'small';
}

const Checkbox = ({ children, dark, indetermine, check, size = 'default', ...props }: CheckboxProps) => {
    const [checked, setChecked] = useState(false);
    const icon_src = check ? CheckIconSVG : indetermine && CheckIndetermineIconSVG;
    const icon_class = check ? 'check_icon' : indetermine && 'indetermine_icon';

    return (
        <div className={css.container} {...props}>
            <CheckBox
                defaultChecked={check || checked}
                className={classNames(css.checkbox, dark && css.dark, check && css.check, indetermine && css.check)}
            >
                {icon_src && icon_class && <img src={icon_src} className={icon_class} />}
            </CheckBox>
            <label
                className={classNames(css[size], dark ? css.text_dark : css.text_light)}
                onClick={() => {
                    setChecked(true);
                }}
            >
                {children}
            </label>
        </div>
    );
};

export default Checkbox;
