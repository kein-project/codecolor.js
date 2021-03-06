/* @flow */

import { literals } from './language';
import type { LiteralName } from './language';

export default class Token {
    name: LiteralName;
    value: string;
    start: number;
    end: number;
    ruleIndex: number;

    constructor(name: LiteralName, value: string, position: number, ruleIndex: number) {
        this.name = name;
        this.value = value;
        this.start = position;
        this.end = position + value.length;
        this.ruleIndex = ruleIndex;
    }

    isIncludedIn(token: Token): boolean {
        return this.start >= token.start && this.end <= token.end;
    }

    isFragment(): boolean {
        return this.name === literals.fragment;
    }
}
