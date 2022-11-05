# my-piday-js

Calculates PI based anniversaries.

## Usage

```js
import myPiDay from "my-piday"
// Or use import {piAnniversaries} from "my-piday"

let myPiDays = myPiDay.piAnniversaries('1990-01-01')
for (let anniversary of myPiDays){
    console.log("Its my " + anniversary.name + " on " + anniversary.date)
}

```

```js
import myPiDay from "my-piday"
// Or use import {nextPiAnniversaries} from "my-piday"
console.log("My next PI anniversary is the " + anniversary.name + " on " + anniversary.date)
```

