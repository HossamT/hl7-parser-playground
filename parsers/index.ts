import { Parser } from '../main';
import { smartLookForward } from './smart-look-forward';
import { simpleLookForward } from './simple-look-forward';
export default [
    {
        name: 'Simple Look Forward (Current0',
        fn: simpleLookForward,
    },
    {
        name: 'Smart Look Forward',
        fn: smartLookForward
    }
] as Parser[];