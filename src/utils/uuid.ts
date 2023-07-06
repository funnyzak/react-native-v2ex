/**
 * Created by Leon<silenceace@gmail.com> at 2023-04-05.
 */

import uuid from 'react-native-uuid'
const UUIDv5_Namespace = '1b671a64-40d5-491e-99b0-da11ff1f3338'
function generateUUIDv5(input: string, namespace: string = UUIDv5_Namespace) {
  return uuid.v5(input, namespace)
}
function batchGenerateUUIDv4(count: number, reset?: (uuid: string) => string) {
  return Array.from({ length: count }, () => (!reset ? uuid.v4() : reset(uuid.v4() as string)))
}
function batchGenerateUUIDv5(input: string[], namespace: string = UUIDv5_Namespace) {
  return input.map((i) => generateUUIDv5(i, namespace))
}
const uuidv4 = uuid.v4
const uuidv5 = uuid.v5
export { generateUUIDv5, batchGenerateUUIDv5, batchGenerateUUIDv4, uuidv4, uuidv5 }
