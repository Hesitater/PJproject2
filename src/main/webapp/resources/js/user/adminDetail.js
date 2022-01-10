const deleteBtn = document.querySelector(".admin_power_delete");
const mainContainer = document.querySelector(".main_container");
const confirmModal = document.querySelector(".confirm_modal_container");
const confirmModalYes = document.querySelector(".confirm_modal_yes");
const confirmModalNo = document.querySelector(".confirm_modal_no");	



const deleteBtnHandler = e =>{
	e.preventDefault();
	const deleteLink = deleteBtn.href;
	confirmModal.classList.remove("confirm_modal_off_modal");
	mainContainer.classList.add("confirm_modal_on_background");
	confirmModalYes.addEventListener("click",()=>{
		deleteBtn.removeEventListener("click",deleteBtnHandler);
		deleteBtn.click();
	},{once:true})
	//confirmModal.classList.add("confirm_modal_off_modal");
	//mainContainer.classList.remove("confirm_modal_on_background");
	
	confirmModalNo.addEventListener("click",()=>{
		confirmModal.classList.add("confirm_modal_off_modal");
		mainContainer.classList.remove("confirm_modal_on_background");
	})
	
}

const init = () =>{
	deleteBtn.addEventListener("click",deleteBtnHandler);
}

if(deleteBtn != null){
	init();
}
