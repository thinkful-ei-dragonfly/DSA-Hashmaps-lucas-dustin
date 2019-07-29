

_findSlot(key) {
  const hash = HashMap._hashString(key);
  const start = hash % this._capacity;

  for (let i=start; i<start + this._capacity; i++) {
      const index = i % this._capacity;
      const slot = this._hashTable[index];
      if (slot === undefined || (slot.key === key && !slot.DELETED)) {
          return index;
      }
  }

  this._capacity = 5;
  
  //flight time
  //[title: length:,title: length:]

  movie1.length 
  movie2.length 

  if length1 + length2  === flighttime return true 