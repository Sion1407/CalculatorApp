module.exports = {
    main_screen: {
        marginTop: 30,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'black',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    main_screen__display: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        backgroundColor: 'black',
        width: '95%',
        borderRadius: 10,
        display: 'flex',
        marginBottom: 10,
        padding: 10,

    },
    textStyle: {
        fontSize: 50,
        textAlign: 'right',
        color:'white',
        fontWeight: 600
    },
    main_screen_keypad: {
        width: '100%',
        height: '70%',
        display: 'flex',
        
    },
    main_screen_keypad_row: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'black',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,

    },
    btn1_outer: {
        width: 80,
        height: 80,
        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 3,
        // },
        // shadowOpacity: 0.27,
        // shadowRadius: 4.65,
        backgroundColor: '#1f1f1f',
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100
    },
    btn_outer: {
        width: 80,
        height: 80,
        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 3,
        // },
        // shadowOpacity: 0.27,
        // shadowRadius: 4.65,
        backgroundColor: '#3b3b3b',
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100
    },
    bg1_button:{
        backgroundColor:'#2e2e2e',
        color: 'white',
        fontSize: 25,
        
    },
    bg_button:{
        backgroundColor:'#3b3b3b',
        color: 'white',
        fontSize: 26,
        
    }


}