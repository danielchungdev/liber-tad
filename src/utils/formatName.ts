
export const formatName = (name: string): string => {
    let nameSplit = name.split(",")
    if (nameSplit.length === 2){
        return `${nameSplit[1]} ${nameSplit[0]}`
    }
    else{
        return name
    }
}