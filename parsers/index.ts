import { Parser } from '../main';
import { greedyParser } from './greedy';
import { smartLookForward } from './smart_look_forward';
export default [
    {
        name: 'Greedy',
        fn: greedyParser,
    },
    {
        name: 'Smart Look Forward',
        fn: smartLookForward
    }
] as Parser[];