import React,{useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GiftGrid } from './components/GiftGrid';
export const GiftExpertApp = ()=>{

    const [categories, setCategories] = useState( ["Shaman King"]);

    // const handleAdd= ()=>{
    //     setCategories([...categories,'Naruto']);
    //     setCategories(['SAO',...categories]);

    //     console.log(categories)
    // }
    return(
        <div>
            <h2>GiftExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>
            <ol>
                {
                    categories.map(category=>
                        <GiftGrid key = {category} category = {category}></GiftGrid>
                    )}
            </ol>
        </div>
    )
}