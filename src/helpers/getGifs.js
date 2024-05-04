export const getGifts = async( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=kwQCDdNDswguJgG6gstaX3KQMpPfs9IY&q=${ category }&limit=10`;
    const resp = await fetch( url );
    const { data } = await resp.json();        

    const gits = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    })); 

    return gits;

}
