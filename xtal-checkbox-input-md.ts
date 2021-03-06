import {XtalTextInputMD} from 'xtal-text-input-md/xtal-text-input-md.js';
import { define } from 'trans-render/define.js';
import { createTemplate } from "xtal-element/utils.js";
const mainTemplate = createTemplate(/* html*/`
<label class="form-checkbox-label">
    <input id="input_field" class="form-checkbox-field" type="checkbox" />
    <i class="form-checkbox-button"></i>
    <slot name="label"></slot>
</label>
<style>
    :host {
        display: block;
    }

.form-checkbox {
  position: relative;
  margin-top: 2.25rem;
  margin-bottom: 2.25rem;
  text-align: left; }

.form-checkbox-inline .form-checkbox-label {
  display: inline-block;
  margin-right: 1rem; }

.form-checkbox-legend {
  margin: 0 0 0.125rem 0;
  font-weight: 500;
  font-size: 1rem;
  color: #333; }

.form-checkbox-label {
  position: relative;
  cursor: pointer;
  padding-left: 1.5rem;
  text-align: left;
  color: #333;
  display: block;
  margin-bottom: 0.5rem; }

.form-checkbox-label:hover i {
  color: #337ab7; }

.form-checkbox-label span {
  display: block; }

.form-checkbox-label input {
  width: auto;
  opacity: 0.0001;
  position: absolute;
  left: 0.25rem;
  top: 0.25rem;
  margin: 0;
  padding: 0; }

.form-checkbox-button {
  position: absolute;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  display: block;
  color: #999;
  left: 0;
  top: 0.25rem;
  width: 1rem;
  height: 1rem;
  z-index: 0;
  border: 0.125rem solid currentColor;
  border-radius: 0.0625rem;
  transition: color 0.28s ease;
  will-change: color; }

.form-checkbox-button::before,
.form-checkbox-button::after {
  position: absolute;
  height: 0;
  width: 0.2rem;
  background-color: #337ab7;
  display: block;
  transform-origin: left top;
  border-radius: 0.25rem;
  content: "";
  transition: opacity 0.28s ease, height 0s linear 0.28s;
  opacity: 0;
  will-change: opacity, height; }

.form-checkbox-button::before {
  top: 0.65rem;
  left: 0.38rem;
  transform: rotate(-135deg);
  box-shadow: 0 0 0 0.0625rem #fff; }

.form-checkbox-button::after {
  top: 0.3rem;
  left: 0;
  transform: rotate(-45deg); }

.form-checkbox-field:checked ~ .form-checkbox-button {
  color: #337ab7; }

.form-checkbox-field:checked ~ .form-checkbox-button::after,
.form-checkbox-field:checked ~ .form-checkbox-button::before {
  opacity: 1;
  transition: height 0.28s ease; }

.form-checkbox-field:checked ~ .form-checkbox-button::after {
  height: 0.5rem; }

.form-checkbox-field:checked ~ .form-checkbox-button::before {
  height: 1.2rem;
  transition-delay: 0.28s; }

.form-has-error .form-checkbox-button {
  color: #d9534f; }

::slotted(span) {
  line-height: 24px; }

</style>
`);
export class XtalCheckboxInputMD extends XtalTextInputMD{
    static get is() { return 'xtal-checkbox-input-md'; }
    get eventContext() {
        this._eventContext!.eventRules!['change'] = e =>{
            this.emitEvent();
        }
        return this._eventContext;
      }

    get checked() {
        return (this.inputElement as HTMLInputElement).checked;
    }
    set checked(val) {
        (this.inputElement as HTMLInputElement).checked = val;
    }
    boolValue = false;
    emitEvent() {
        const val = (this.inputElement as HTMLInputElement).checked;
        this.value = val ? 'on' : 'off';
        this.boolValue = val ? true : false;
        this.de('value', {
            value: val,
            boolValue: this.boolValue
        })
        
    }
    get mainTemplate(){
        return mainTemplate;
    }

}
define(XtalCheckboxInputMD);