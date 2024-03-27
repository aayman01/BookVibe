import { toast } from "react-toastify";

const getStoredReadItem = () => {
  const storedItem = localStorage.getItem("read");
  if (storedItem) {
    return JSON.parse(storedItem);
  }
  return [];
};

const saveReadItem = (id) => {
  const storedItem = getStoredReadItem();
  const exists = storedItem.find((jobId) => jobId === id);
  if (!exists) {
    storedItem.push(id);
    localStorage.setItem("read", JSON.stringify(storedItem));
    toast.success("SuccesFully Added to the Read list");
  } else {
    toast.error("Already added in Read List");
  }
};


const getStoredWishList = () => {
  const storedItem = localStorage.getItem("wishList");
  if (storedItem) {
    return JSON.parse(storedItem);
  }
  return [];
};

const saveWishList = (id) => {
    const storedItem = getStoredWishList();
    const storedReadIteam = getStoredReadItem();
    const exists = storedReadIteam.find(jobId => jobId === id)
    const isExist = storedItem.find(jobId => jobId === id);
    if(!isExist && !exists){
        storedItem.push(id);
        localStorage.setItem('wishList', JSON.stringify(storedItem))
        toast.success("SuccesFully Added to the Wishlist");
    }
    else if(exists){
        toast.error('Already readed')
    }
    else{
        toast.error('Already added in wishlist')
    }
}



export { getStoredReadItem, saveReadItem, getStoredWishList, saveWishList };

