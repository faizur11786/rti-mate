
const handler = ( req, res ) => {
    const { id } = req.query;
    res.json( { data: "yes", id } )
}

export default handler