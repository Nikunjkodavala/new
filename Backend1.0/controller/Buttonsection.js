const MagicButton = require('../models/MagicButton');
exports.basicbuttom = async (req, res) => {
     try {
        const { name, color, bgcolor, size, btncode } = req.body;
        if (!name || !color || !bgcolor || !btncode) {
            return res.status(400).json(
                { 
                    success:false,
                    message: "Please fill all the fields" 
                }
            );
        }
        const magicbutton = new MagicButton({
            name, color, bgcolor, size, btncode
        });
        await magicbutton.save();
        res.status(200).json(
            { 
                success:true,
                message: "Button Created Successfully" 
            }
        );
        
     } catch (error) {
        console.log("Internal Server Error", error);
        res.status(500).json(
            { 
                success:false,
                message: "Internal Server Error" 
            }
        );
     }
}