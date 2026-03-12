const BookDemo = () => {
    const textStyle = {
        fontSize: '16px', 
        color: 'white',
        padding: '20px',
        boxSizing: 'border-box',
        width: '100%',
        height: '100vh',
        backgroundImage: 'url(path/to/your/image.jpg)',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    };
    
    return (
        <iframe
            src="https://api.leadconnectorhq.com/widget/form/EqLUIibs9ylzcSOezW9U"
            style={textStyle}
            id="inline-EqLUIibs9ylzcSOezW9U"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Book a Demo"
            data-height="643"
            data-layout-iframe-id="inline-EqLUIibs9ylzcSOezW9U"
            data-form-id="EqLUIibs9ylzcSOezW9U"
            title="Book a Demo"
        >
        </iframe>
    )
}

export default BookDemo;