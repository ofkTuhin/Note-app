import dbConnect from "../../../utils/dbConnection";
import Note from "../../../models/Note";

dbConnect()

const DataIdById = async (req, res) => {
    const {
        query: { id },
        method
    } = req;

    switch (method) {
        case 'GET':
            try {
                const note = await Note.findById(id)
                if (!note) {
                    res.status(400).json({ success: false })
                }
                res.status(200).json({ success: true, data: note })
            } catch (error) {
                res.status(400).json({ success: false })
            }

            break;

        case 'PUT':
            try {
                const note = await Note.findByIdAndUpdate(id,req.body,{
                    new:true,
                    runValidators:true
                })
                if (!note) {
                    res.status(400).json({ success: false })
                }
                res.status(200).json({ success: true, data: note })
            } catch (error) {
                res.status(400).json({ success: false })
            }

            break;

            case 'DELETE':
            try {
                const deleteOne = await Note.deleteOne({_id:id})
                if (!deleteOne) {
                    res.status(400).json({ success: false })
                }
                res.status(200).json({ success: true, data: {} })
            } catch (error) {
                res.status(400).json({ success: false })
            }

            break;


        default:res.status(400).json({ success: false })
            break;
    }
}

export default DataIdById;