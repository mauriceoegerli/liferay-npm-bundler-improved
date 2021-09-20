type npmbundlerrc = {
    'create-jar': undefined | {
        'output-dir': undefined | string,
        'features': undefined | {
            'js-extender': undefined | boolean,
            'web-context': undefined | string,
            'localization': undefined | string,
            'configuration': undefined | string
        }
    }
}

export default npmbundlerrc