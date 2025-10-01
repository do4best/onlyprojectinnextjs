import React from 'react';
import {MdAutoDelete, MdOutlineCancel} from "react-icons/md";
import {CiCircleCheck} from "react-icons/ci";


function ListItem1({map_it,handel_it,delete_it}) {
    return (
        <>
        
       <ul className="mx-auto mt-6 max-w-2xl rounded-2xl border border-base-300/40 bg-gradient-to-br from-base-200/70 via-base-100/60 to-base-300/60 backdrop-blur shadow-xl shadow-primary/10">
           <li className="px-5 py-2 text-sm text-base-content/70 flex justify-end">
               <span className="badge badge-primary badge-outline">{map_it.length} {map_it.length === 1 ? 'task' : 'tasks'}</span>
           </li>
           {map_it.length === 0 && (
               <li className="px-6 py-4 text-center text-base-content/70">Nothing here yet — add your first task!</li>
           )}
           {map_it.map((item,index)=>(
               <li key={item.id} className="group flex items-center gap-4 px-5 py-3 rounded-lg transition-all duration-300 hover:bg-base-300/60 hover:shadow-md hover:shadow-primary/10">
                   <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-content font-semibold shadow-sm ring-1 ring-primary/50">
                       {index + 1}
                   </span>
                   <span className={`text-lg ${item.done ? 'line-through opacity-60' : ''}`}>{item.text}</span>
                   <span className="btn btn-square btn-ghost ml-auto">
                                {item.done ? (
                                    <MdOutlineCancel size={20} onClick={() => handel_it(item.id)} />
                                ) : (
                                    <CiCircleCheck size={20} onClick={() => handel_it(item.id)} />
                                )}
                            </span>
                   <span className="btn btn-square btn-ghost">
                                <MdAutoDelete size={20} onClick={() => delete_it(item.id)} />
                            </span>
               </li>
           ))}
       </ul>
        </>
    );
}

export default ListItem1;