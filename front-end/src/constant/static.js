export const homeData = {
	init : "This is datas from database"
}
export const editData = {
	personalMsg : {
		id : "vhfy787f75f7gyt7juy767",		//main key
		clientName : "Mr Liu",			//debt person
		address : "Beijing",			//detail address
		avatar : "src",				//icon, picture
		phone : "13325467839",
		debitTime : "2017/07/15",		// effective date of order.
		restituteTime : "2018/07/15",		// expire time
		debitType : "guaranty/credit/shortTerm",
		debitVolume : "5W/50000/10.5W",
		restituteMethod : "avgInterest/avgFunds",    //escheat by equal interest or funds.
		interestRate : "0.435/1.2%/10%",
		//calculation formula is defined in front-end.
		pawn : {
			type : "car/house",
			pawnValue : "5W/50000/10.5W",
			buyTime : "2011/07"
		},
		work : "no/driver/official/teacher",
			earnings : "8k/10000/2W/2w",
			creditQuota : "400W",		//remained to be thought over.
			status : "doing/lost/done",
			provision : "3k/3000",		//pay money every month.
			relationalPerson : "id",		//An id connected on another database table.
			hide : false			//Whether it’s visible when querying the data.
	},
	relationalPersonMsg : {
		exist : true,		//or false. It means whether there’s guarantors for clients.
		id : "27iwh8ff83hoiwdreer4",
		IDcardMsg : ""
	}
}
export const doingData = {

}
export const doneData = {

}
export const helpData = {

}