import { type SchemaTypeDefinition } from 'sanity'

import { blockContentType } from './blockContentType'
import { categoryType } from './categoryType'
import { postType } from './postType'
import { authorType } from './authorType'
import  newsType  from './newsType' 
import upcoming from "./upcoming";
import replay from "./replay"; 
import match from './match';
import gameResult from './gameResult'
import fans from './fans'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, postType, authorType, newsType,upcoming,replay,match,gameResult,fans], 
}
