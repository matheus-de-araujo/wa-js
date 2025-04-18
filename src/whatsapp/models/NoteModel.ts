/*!
 * Copyright 2024 WPPConnect Team
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { NoteCollection } from '../collections';
import { exportProxyModel } from '../exportModule';
import {
  Model,
  ModelOptions,
  ModelPropertiesContructor,
  ModelProxy,
} from './Model';

interface Props {
  id?: any;
  type?: string;
  chatJid: string;
  content: string;
  createdAt?: number;
  modifiedAt?: number;
}

interface Session {
  stale?: any;
}

interface Derived {}

export declare interface NoteModel
  extends ModelProxy<Props, Session, Derived> {}

/** @whatsapp 86761
 */
export declare class NoteModel extends Model<NoteCollection> {
  constructor(
    proterties?: ModelPropertiesContructor<NoteModel>,
    options?: ModelOptions
  );
  triggerItemCollectionUpdate(): any;
  getCollection(): NoteCollection;
}

exportProxyModel(exports, 'NoteModel');
