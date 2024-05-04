import{ useState } from 'react';
import { AddCategory, GitGrid } from './components/';

export const GitExpertApp = () => {

    const [ categories, setCategories ] = useState([ 'One Puch' ]);
    const onAddCategory = ( newCategory ) => {
        if ( categories.includes(newCategory) ) return;
        setCategories( cat =>  [ newCategory, ...cat ] );
    }

    return (
        <>
           <h1>GifExpertApp</h1>
           <AddCategory 
                onNewCategory={ ( value ) => onAddCategory( value ) }                
            />

            { categories.map( category =>  (
                    <GitGrid 
                        key={ category } 
                        category={ category }
                    />
                ))
            }

        </>
    )
}