const Node = require('./node');
class LinkedList {
	
    constructor() {
		this._head = null;
		this._tail = null;
		this.length = 0;
	}

    append(data) {
		var temp = new Node(data);
		if(this._head == null)
		{
			temp.next = temp.prev = null;
			this._head = this._tail = temp;
		}
		else{
			temp.next = null;
			temp.prev = this._tail;
			this._tail.next = temp;
			this._tail = temp;
		}
		this.length++;
		return this;
	}

    head() {
		if(this.length === 0)
			return null;
		else
			return this._head.data;
	}

    tail() {
		if(this.length === 0)
			return null;
		else
			return this._tail.data;
	}

    at(index) {
		var temp = this._head;
		for(var i = 0;i < index;i++)
		{
			temp = temp.next;
		}
		return temp.data;
	}

    insertAt(index, data) {
		var temp;
		var insert_temp = new Node(data);
		if(index === 0)
		{
			if(this.length === 0)
			{
				insert_temp.next = insert_temp.prev = null;
				this._head = this._tail = insert_temp;
			}
			else{
				this._head.prev = insert_temp;
				insert_temp.next = this._head;
				insert_temp.prev = null;
				this._head = insert_temp;
			}
		}
		else{
				temp = this._head;
				for(var i = 0;i < index;i++)
				{
					temp = temp.next;
				}
				temp.prev.next = insert_temp;
				temp.prev = insert_temp;
				insert_temp.prev = temp.prev;
				insert_temp.next = temp;
			}
		return this;
	}

    isEmpty() {
		if(this.length === 0)
			return true;
		else 
			return false;
	}

    clear() {
		if(this.length === 0 )
			return this;
		var temp = this._head, temp1 = null;
		while(this.length > 0 )
		{
			this._head = temp.next;
			temp1 = temp;
			temp = null;
			this.length--;
			temp = temp1.next;
		}
	this._tail = this._head = null;
	return this;
	}

    deleteAt(index) {
		if(index < 0 || index > (this.length - 1) )
			return this;
		var temp = null;
		
		if(index === 0)
		{
			if(this.length === 1 && index == 0)
			{
				this._head = this._tail = null;
				this.length--;
				return this;	
			}
			temp = this._head;
			temp = temp.next;
			temp.prev = null;
			this._head = temp;
			this.length--;
			return this;	
		}
		if(index === this.length - 1)
		{
			temp = this._tail;
			temp = temp.prev;
			temp.next = null;
			this._tail = temp;
		}
		else
		{
			temp = this._head;
			for(var i = 0; i < index; i++)
				temp = temp.next;
			temp.prev.next = temp.next;
			temp.next.prev = temp.prev;
			temp = temp.next = temp.prev = null;
		}
		this.length--;
		return this;
	}

    reverse() {
		var temp = this._head, temp1 = null;
		while(temp)
		{
			temp1 = temp.next;
			temp.next = temp.prev;
			temp.prev = temp1;
			temp = temp.prev;
		}
		temp1 = this._head;
		this._head = this._tail;
		this._tail = temp1;
		return this;
	}

    indexOf(data) {
		var temp = this._head;
		var index = 0;
		while(temp)
		{
			if(temp.data === data)
				return index;
			index++;
			temp = temp.next;
		}
		return -1;
	}
}

module.exports = LinkedList;
