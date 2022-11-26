import React from 'react';
export const WidgetPlaceholder = () => 
(<div draggable className="flex mt-5">
<Template/>
<img
className="image"
src="https://gist.githubusercontent.com/madhavms/8cb87494048689fe98177ed2bb6ba329/raw/4d5b97da61310840957cf83fc101004f117a9947/trashcan.svg"
></img>
</div>)

const Template = () => 
{  
     const varColor = "text-green-500";
    return(
        <div
        className={
          "quote rounded-lg shadow-md p-4 bg-gray-800 w-64 h-52px"
        }
      >
        <span className={"quoteSymbol text-sm text-white font-bold"}>
        </span>
        <span
          className={"quoteSymbol ui-sans-serif text-2xs text-gray-400 ml-1"}
        >

        </span>
        <span
          className={"quoteSymbol ui-sans-serif text-2xs text-gray-400 ml-1"}
        >

        </span>
        <div className={"quote flex flex-row justify-between mt-1"}>
          <div
            className={
              "quotePrice ui-sans-serif self-center text-2xl font-bold items-center text-white"
            }
          >

          </div>
          <div className={"flex flex-col text-right"}>
            <div className={"quoteVar " + varColor}></div>
            <div
              className={
                "quoteTime ui-sans-serif text-right text-2xs text-gray-400"
              }
            >
            </div>
          </div>
        </div>
      </div>
    )          
}