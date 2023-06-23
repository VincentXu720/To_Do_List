const items = document.querySelector('.items');
const add = document.querySelector('.bi-plus-circle');
const Delete = document.querySelector('.Delete');
const itemBox = document.querySelector('.itemBox');

// 事項添加與部分功能
function EnterItem(){
    if(items.value){
        const item = document.createElement('div');
        item.classList.add('itemframe');
        item.innerHTML = `
        <input type="checkbox" class="checkbox">
        <span class="spanitem">${items.value}</span>
        <button class="edit">Edit</button>
        <button class="remove">Delete</button>
        `
        itemBox.appendChild(item);
        

        const edit = item.querySelector('.edit');
        const remove = item.querySelector('.remove');
        const check = item.querySelector('.checkbox');
        const Edit_item = item.querySelector('.spanitem');

        edit.addEventListener('click',()=>{
            if(edit.innerText == "Edit" ){
                edit.innerHTML = `Save`
                Edit_item.contentEditable = true;
                Edit_item.focus();
            }else{
                edit.innerHTML = `Edit`
                Edit_item.contentEditable = false;
            }

        })
        remove.addEventListener('click',()=>{
            item.remove();
        })
        check.addEventListener('click',()=>{
            Edit_item.classList.toggle('checkbox');
        })

        // 一鍵刪除功能
        Delete.addEventListener('click',()=>{
            item.remove();
        })
    }
}


add.addEventListener('click',EnterItem);
