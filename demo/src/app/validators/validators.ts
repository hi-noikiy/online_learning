/**
 * 校验器集合
 */

import {FormControl, FormGroup} from '@angular/forms';

/**
 * 邮箱校验器
 * @param {FormControl} contotl
 * @returns {any}
 */
export function emailValidator(contotl: FormControl): any {
  const req = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
  const vaild = req.test(contotl.value);
  console.log('邮箱的校验结果是 ' + vaild);
  return vaild ? null : {my_email: true};
}

/**
 * 判断两次密码是否一致校验器
 * @param {FormGroup} group
 * @returns {any}
 */
export function equalVaidator(group: FormGroup): any {
  const password1: FormControl = group.get('password1') as FormControl;
  const password2: FormControl = group.get('password2') as FormControl;
  const valid: boolean = (password1.value === password2.value);
  console.log('两次密码是否一致: ' + valid);
  return valid ? null : {my_equal: true};
}