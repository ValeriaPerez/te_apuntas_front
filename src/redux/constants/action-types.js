const allTypes = [
    'RETRIEVE_IMAGES_HOME',
    'SAVE_DATA_CONTACT',
    'LOGIN',
  ];
  
  /**
   * An async action type is not a string literal, as regular action types.
   * It's an object with START, SUCCESS and FAIL properties, each of it is a string literal
   * representing a typical redux action type.
   */
  export function createAsyncActionType(name) {
    if (typeof name !== 'string') {
      console.warn(`Multiple async action middleware expected a string, instead recieved ${typeof name}`); // eslint-disable-line no-console
    }
    return {
      START: name,
      SUCCESS: name + '_SUCCESS',
      FAIL: name + '_FAIL',
    };
  }
  
  /**
   * Generated map has the shape
   * {
   *   code: {
   *    START: 'code_START',
   *    SUCCESS: 'code_SUCCESS',
   *    FAIL: 'code_FAIL'
   *   }
   * }
   */
  const asyncActionTypes = {};
  for (const code of allTypes) {
    asyncActionTypes[code] = createAsyncActionType(code);
  }
  
  export default asyncActionTypes;