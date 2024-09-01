/**
 * Copyright 2013-2024 the original author or authors from the JHipster project.
 *
 * This file is part of the JHipster project, see https://www.jhipster.tech/
 * for more information.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { reservedKeywords } from '../built-in-options/index.js';
import Validator, { ValidatorOptions } from './validator.js';

const { isReservedClassName } = reservedKeywords;
export default class EnumValidator extends Validator {
  constructor() {
    super('enum', ['name']);
  }

  validate(jdlEnum, options: ValidatorOptions = {}) {
    super.validate(jdlEnum);
    if (options.checkReservedKeywords) {
      checkForReservedClassName(jdlEnum);
    }
  }
}

function checkForReservedClassName(jdlEnum) {
  if (isReservedClassName(jdlEnum.name)) {
    throw new Error(`The enum name '${jdlEnum.name}' is reserved keyword and can not be used as enum class name.`);
  }
}
