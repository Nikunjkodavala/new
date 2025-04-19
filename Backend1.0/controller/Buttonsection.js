const MagicButton = require('../Model/basicbtn');

exports.basicbuttom = async (req, res) => {
     try {
        const { name, color, bgcolor, size, btncode} = req.body;
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
                message: "Button Created Successfully",
                data:magicbutton
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

exports.incrementLikeAndView = async (req, res) => {
    try {
        const { id } = req.params;
        console.log("params ID..",id)
        if (!id) {
            return res.status(400).json({
                success: false,
                message: "Button ID is required"
            });
        }

        const magicbutton = await MagicButton.findById(id);
        if (!magicbutton) {
            return res.status(404).json({
                success: false,
                message: "Button not found"
            });
        }

        magicbutton.Like = (magicbutton.Like || 0) + 1;
        magicbutton.View = (magicbutton.View || 0) + 1;

        await magicbutton.save();

        res.status(200).json({
            success: true,
            message: "Likes and views incremented successfully",
            data: magicbutton
        });
    } catch (error) {
        console.log("Internal Server Error", error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

exports.getAllButtons = async (req, res) => {
    try {
        const buttons = await MagicButton.find();

        if (!buttons || buttons.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No buttons found"
            });
        }
          
        res.status(200).json({
            success: true,
            message: "Buttons fetched successfully",
            data: buttons
        });
    } catch (error) {
        console.log("Internal Server Error", error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}