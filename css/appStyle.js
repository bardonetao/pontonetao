module.exports = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    titulo: {
        fontSize: 35,
        textAlign: 'center',
        margin: 10,
        color: '#000000',
        fontWeight: 'bold',
    },
    logo: {
        width: 200,
        height: 200,
        resizeMode: 'contain'
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    buttonContainer: {
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#000000',
        padding: 20,
        width: 200,
        height: 200,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 10,
        shadowOpacity: 0.25
    },
    button: {
        position: 'absolute',
        top: 20,
        padding: 10,
    },
    caption: {
        fontSize: 20,
        fontWeight: 'bold',
        alignItems: 'center',
    },
    appBar: {
        height: 56,
        backgroundColor: '#2196F3',
        elevation: 4
    },
    appBarLogo: {
        height: 56,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
    appBarTitle: {
        fontSize: 20,
        color: '#fff',
        paddingLeft: 10
  },
};
