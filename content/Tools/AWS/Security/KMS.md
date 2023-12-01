#aws 
## Abstract 
- Supports both [[Symmetric Cryptography]] & [[Asymmetric Encryption]]
- Only manages [[#Customer Master Keys (CMKs)]] using [[Hardware Security Modules (HSMs)]], not [[#Data Keys]]




## Features
### 1) [Bring Your Own Key(BYOK)](https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys.html)
1. Create an empty KMS Key
2. Download wrapping public key & import token
![[kms_download_wrapping_public_key_and_import_token.png]]
3. Create ``EncryptedKeyMaterial.bin``
```sh
openssl pkeyutl \                                
    -encrypt \
    -in aes-key.bin \
    -out EncryptedKeyMaterial.bin \
    -inkey WrappingPublicKey.bin \
    -keyform DER \
    -pubin \
    -pkeyopt rsa_padding_mode:oaep \
    -pkeyopt rsa_oaep_md:sha256 \
    -pkeyopt rsa_mgf1_md:sha256
```
4. Upload the encrypted key material
![[kms_upload_key.png]]
- ``Wrapped key material`` is the ``EncryptedKeyMaterial.bin``
- ``Import token`` is the ``ImportToken.bin``
#### CAUTION: Same key material but different KMS key result in a different key
- When you encrypt data under a KMS key, the [[Ciphertext (密文)]] is permanently associated with the KMS key and its key material 
- It cannot be decrypted with any other KMS key, i̲n̲c̲l̲u̲d̲i̲n̲g̲ ̲a̲ ̲d̲i̲f̲f̲e̲r̲e̲n̲t̲ ̲K̲M̲S̲ ̲k̲e̲y̲ ̲w̲i̲t̲h̲ ̲t̲h̲e̲ ̲s̲a̲m̲e̲ ̲k̲e̲y̲ ̲m̲a̲t̲e̲r̲i̲a̲l̲. This is a security feature of KMS keys
- [StackOverflow Reference](https://stackoverflow.com/questions/72448398/import-backup-of-external-aws-kms-keys) & [AWS Official Doc Reference](https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys.html)


## Terminologies
### Customer Master Keys (CMKs)
- Generate, encrypt, decrypt [[#Data Keys]]
- Never leave the region that it was created
- Encrypts maximum 4KB data

### Data Keys
- The plaintext version(by default base64 encoded, we need to decode) is used to encrypt data, and disposed immediately, only the encrypted version is stored
- Call KMS API with the encrypted version to obtain the plaintext version to perform decryption of data