# aws-connect-own-monitoring

## AWS Docs

* [StartOutboundVoiceContact](https://docs.aws.amazon.com/connect/latest/APIReference/API_StartOutboundVoiceContact.html)
    - Required: Yes
      - ContactFlowId
      - DestinationPhoneNumber
      - InstanceId

* [Amazon Connect StartOutboundVoiceContact API を使用して顧客へのアウトバウンドコールを行うにはどうすればよいですか?](https://aws.amazon.com/jp/premiumsupport/knowledge-center/connect-outbound-calls-api/)

## Connect Call 

### Lambda Source(Node.js 14.x)

[index.js](./src/lamdba/connect-calling/index.js)

### Lamdba環境変数

|キー|値|
| --- | --- |
|CONTACTFLOWID|******|
|CUSTOMERPHONENUMBER|E.164形式（+*****）|
|INSTANCEID| ****** |

### EventBridge (CloudWatch Events)

`cron(0/15 1-9 ? * SUN *)`

## Contact Flow 

### Flow Sample

[calling-monitoring](./src/connect/contactflow/calling-monitoring.json)

### Lamdba Source(Node.js 14.x)

[index.js](src/lamdba/connect-hang-up-js/index.js)

## NOTES

* [AWSバーチャル彼女から毎朝モーニングコールで起こしてもらう1つのアーキテクト](https://qiita.com/KurokawaKouhei/items/639b0d58b8b59e008e30)
* [【初心者向け】Amazon Connectの構築からOutbound APIを叩いて電話を発信するまで](https://qiita.com/duplicate1984/items/e97c6acdd8d7932a7ee1)
