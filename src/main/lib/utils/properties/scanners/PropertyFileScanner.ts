/// <reference path="../../../../../../typings/node/node.d.ts" />

import Path = require("path");
import FileSystem = require("fs");
import PropertyFile from "../model/PropertyFile";

/**
 * PropertyFileScanner
 */
export default class PropertyFileScanner {
    
    /**
     * Constructor
     */
    constructor() {}

    /**
     * scan
     * 
     * @params directoryPath : string
     * @return propertyFiles : Array<PropertyFile>
     */
    public scan(directoryPath : string) : Array<PropertyFile> {
        let propertyFiles : Array<PropertyFile> = [];
        this.extractPropertyFiles(propertyFiles, directoryPath);
        return propertyFiles;
    }

    /**
     * extractPropertyFiles
     * 
     * @params propertyFiles : Array<PropertyFile>
     * @params directoryPath : string
     */
    private extractPropertyFiles(propertyFiles : Array<PropertyFile>, directoryPath : string) : void {
        let filenames : Array<string> = this.scanDirectory(directoryPath);
        for(let i = 0; i < filenames.length; i++) {
            let filename : string = filenames[i];
            let filePath : string = this.buildFilePath(directoryPath, filename);
            this.addPropertyFile(propertyFiles, filePath, filename);
        }
    }
    
    /**
     * scanDirectory
     * 
     * @params directoryPath : string
     * @return directoryFileNames : Array<string>
     */
    private scanDirectory(directoryPath : string) : Array<string> {
        return FileSystem.readdirSync(directoryPath);
    }
    
    /**
     * buildFilePath
     * 
     * @params directoryPath : Array<string>
     * @params filename : string
     * @return filePath : string
     */
    private buildFilePath(directoryPath : string, filename : string) : string {
        return Path.normalize(directoryPath + "/" + filename);
    }
    
    /**
     * addPropertyFile
     * 
     * @params propertyFiles : Array<PropertyFile>
     * @params filePath : string
     * @params filename : string
     */
    private addPropertyFile(propertyFiles : Array<PropertyFile>, filePath : string, filename: string) : void {
        var fileStat = FileSystem.statSync(filePath);
        if(this.isPropertyFile(fileStat, filename)) {
            var propertyFile = this.buildPropertyFile(filePath, filename);
            propertyFiles.push(propertyFile);
        }
    }
    
    /**
     * isPropertyFile
     * 
     * @params fileStat : FileSystem.Stats
     * @params filename : string
     * @return boolean
     */
    private isPropertyFile(fileStat : FileSystem.Stats, filename : string) : boolean {
        return fileStat.isFile() && filename.indexOf(".properties") !== -1;
    }
    
    /**
     * buildPropertyFile
     * 
     * @params filePath : string
     * @params filename : string
     * @return propertyFile : PropertyFile
     */
    private buildPropertyFile(filePath : string, filename : string) : PropertyFile{
        var propertyFileName = this.extractPropertyFileName(filename);
        var propertyFileContent = this.extractPropertyFileContent(filePath);
        return new PropertyFile(propertyFileName, propertyFileContent);
    }
    
    /**
     * extractPropertyFileName
     * 
     * @params filename : string
     * @return propertyFileName : string
     */
    private extractPropertyFileName(filename : string) : string {
        return filename.replace(".properties", '');
    }
    
    /**
     * extractPropertyFileContent
     * 
     * @params filePath : string
     * @return propertyFileContent : string
     */
    private extractPropertyFileContent(filePath : string) : string {
        return FileSystem.readFileSync(filePath)
                         .toString();
    }

}