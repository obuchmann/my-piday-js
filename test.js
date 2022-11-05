import assert from 'assert'
import myPiDay from "./index.js";

let myPiDays = myPiDay.piAnniversaries('1990-01-01')
assert.equal(myPiDays[0].date, '1993-02-22')
assert.equal(myPiDays[1].date, '1996-04-14')
assert.equal(myPiDays[2].date, '1999-06-05')
assert.equal(myPiDays[3].date, '2002-07-27')
assert.equal(myPiDays[4].date, '2005-09-16')