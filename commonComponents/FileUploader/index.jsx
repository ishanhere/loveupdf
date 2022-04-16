import { Button, Col, Row, Upload } from "antd";
import Image from "next/image";

import React from "react";

function FileUploader(props) {
  const { Dragger } = Upload;

  return (
    <Row>
      <Col>
        <div className="uploadWrap">
          <Dragger
            name="avatar"
            accept="image/*,application/pdf"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            showPreviewIcon={false}
            multiple={false}
            beforeUpload={beforeUpload}
            fileList={uploadedFile ? [uploadedFile] : []}
            onRemove={onRemove}
            showRemoveIcon={true}
            onChange={({ file }) => {
              if (file.status === "error") {
                onRemove();
              } else if (file.status != "removed" && file.status != "error") {
                setFile(file);
              }
            }}
          >
            <p className="ant-upload-drag-icon">{/* <Image /> */}</p>
            <div className="bold"></div>
            <Button type="primary" onClick={() => onClickUpload()}>
              Upload
            </Button>
          </Dragger>
          {/* {!!percentBar && ( */}
          <>
            {uploadedFile && (
              <p className="uploadFileName">{uploadedFile.name}</p>
            )}
            {/* <Progress
                        strokeColor={"#1F1F1F"}
                        showInfo
                        percent={percentBar}
                      /> */}
          </>
          {/* )} */}
        </div>
      </Col>
    </Row>
  );
}

export default FileUploader;
