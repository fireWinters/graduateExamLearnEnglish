/*
 * @Email：tangwangyao@hualala.com
 * @Date: 2022-11-14 13:26:41
 * @FilePath: /mis-csm-web-fe/Users/callustang/tangCode/graduateExamLearnEnglish/00004-easy-pick.ts
 */
// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Expected1, MyPick<Todo, 'title'>>>,
  Expect<Equal<Expected2, MyPick<Todo, 'title' | 'completed'>>>,
  // @ts-expect-error
  MyPick<Todo, 'title' | 'completed' | 'invalid'>,
]

interface Todo {
  title: string
  description: string
  completed: boolean
}

interface Expected1 {
  title: string
}

interface Expected2 {
  title: string
  completed: boolean
}


// ============= Your Code Here =============
type MyPick<T, K extends keyof T> = {[P in K]:T[P]}
