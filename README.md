# my-piday-js

Calculates PI based anniversaries.

## Usage

```js
import MyPiDay from "my-piday"
// Or use import {piAnniversaries} from "my-piday"

let myPiDays = MyPiDay.piAnniversaries('1990-01-01')
for (let anniversary of myPiDays){
    console.log("Its my " + anniversary.name + " on " + anniversary.date)
}

```

```js
import MyPiDay from "my-piday"
// Or use import {nextPiAnniversary} from "my-piday"
let anniversary = MyPiDay.nextPiAnniversary('1990-01-01')
console.log("My next PI anniversary is the " + anniversary.name + " on " + anniversary.date)
```

