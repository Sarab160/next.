var blogsdata = [{
    id:1,
    slug:"companies",
    description:"top software companies"
},{
    id:2,
    slug:"houses",
    description:"top software houses"
},{
    id:3,
    slug:"industries",
    description:"top industries"
},{
    id:4,
    slug:"images",
    description:"top software images"
}]
function data({ params }: { params: { slug: string } }){
    var slugdata = blogsdata.filter((item)=>item.slug==params.slug)
    return(
        <div>{slugdata[0]?.description}
          <div>
            <b><h3>
                hello 
                
                MUHAMMAD SARAB RAFIQUE IS HERE </h3></b>
        </div></div>
    )
}
    export default data;