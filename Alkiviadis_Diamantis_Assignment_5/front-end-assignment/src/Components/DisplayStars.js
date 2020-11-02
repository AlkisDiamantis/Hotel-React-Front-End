import React from "react";

export default class DisplayStars extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            stars: props.stars
        }
    }

    render() {

        switch (this.props.stars) {

            case 1:
                return (
                    <div>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star "></span>
                        <span className="fa fa-star "></span>
                        <span className="fa fa-star "></span>
                        <span className="fa fa-star"></span>
                    Hotel
                    </div>
                );
  
            case 2:
                return (
                    <div>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star "></span>
                        <span className="fa fa-star "></span>
                        <span className="fa fa-star"></span>
                        Hotel
                    </div>
                );
             
            case 3:
                return (
                    <div>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star "></span>
                        <span className="fa fa-star"></span>
                            Hotel
                    </div>
                );
             
            case 4:
                return (
                    <div>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star"></span>
                                Hotel
                    </div>
                );
            
            case 5:
                return (
                    <div>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                                    Hotel
                    </div>
                );
             
            default:
                return (
                    <div>
                        <span className="fa fa-star "></span>
                        <span className="fa fa-star "></span>
                        <span className="fa fa-star "></span>
                        <span className="fa fa-star "></span>
                        <span className="fa fa-star"></span>
                                        Hotel
                    </div>
                );
            

        }

        // if (this.state.stars === 4) {
        //     return (
        //         <div>
        //             <span className="fa fa-star checked"></span>
        //             <span className="fa fa-star checked"></span>
        //             <span className="fa fa-star checked"></span>
        //             <span className="fa fa-star checked"></span>
        //             <span className="fa fa-star"></span>
        // Hotel
        //         </div>
        //     );
        // }else if (this.state.stars === 5){
        //     return (
        //         <div>
        //             <span className="fa fa-star checked"></span>
        //             <span className="fa fa-star checked"></span>
        //             <span className="fa fa-star checked"></span>
        //             <span className="fa fa-star checked"></span>
        //             <span className="fa fa-star checked"></span>
        // Hotel
        //         </div>
        //     );

        // }
    }

}