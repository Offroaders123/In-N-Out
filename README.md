# In-N-Out 🍔

Type definitions for ordering at In-N-Out!

Dude, epic shower thoughts tonight 😂

I was thinking about how our customer service at In-N-Out is essentially an API to the kitchen.

I started thinking about how it works in terms of a program flow, or API endpoint.

The only quirky thing about the input/output for the store's user-facing API (😂) is that you can order in Combos, but those aren't actual things in terms of what the user receives, in the idea way. Everything is itemized, so you don't essentially get a Combo back, you get the items from in the Combo. If it was symmetrical on both sides, then I think our receipts would reflect the Combo definitions the same way as they are ordered. If you read a `Uint8Array` from the function parameter, then we are returning the `ArrayBuffer`.

Essentially, what you order isn't what you get (thinking in programming terms).

It's like JavaScript, the Combo is coalesced to the kitchen primitives, and you get the primitives in return, not the object itself. This coalescing happens during the initial ordering process.

With that idea on the top of my mind, I thought it sounded cool to write TypeScript definitions for the ordering process 😂😂😂

Essentially, a JS API declaration that describes the order structure, what can be allowed together, and what can't. Here goes!