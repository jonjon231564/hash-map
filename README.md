# hash-map
Javascript hash map 

In this project I mad a hash map class that make makes an array to store data in based on the key of an input. The methods include hash, set, get, has, remove, length, clear, keys, values, entries, and sizeUp. I think the best part is the size up feature that doubles the array size if the percentage of data entries to array size is more than 75%. This allows for less collisions in the hashmap. I kind of wanted to include a sizeDown method that would sizeDown if the hashmap had a loadfactor of below 25% but decided not to ;because, their wouldn't be a decline in time complexity. I also forgot to mention that if two data entries are added to the same array index it turns it into a linked list using the class I made in the Linked List project.
