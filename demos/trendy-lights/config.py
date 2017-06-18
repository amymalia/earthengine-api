#!/usr/bin/env python
"""Required credentials configuration."""

import ee

# The service account email address authorized by your Google contact.
# Set up a service account as described in the README.
EE_ACCOUNT = 'amytakayesu@developer.gserviceaccount.com'
service_account = 'test-service-account@totemic-studio-168205.iam.gserviceaccount.com'
credentials = ee.ServiceAccountCredentials(service_account, 'privatekey.pem')
ee.Initialize(credentials)

# The private key associated with your service account in Privacy Enhanced
# Email format (.pem suffix).  To convert a private key from the RSA format
# (.p12 suffix) to .pem, run the openssl command like this:
# openssl pkcs12 -in downloaded-privatekey.p12 -nodes -nocerts > privatekey.pem
EE_PRIVATE_KEY_FILE = 'privatekey.pem'

EE_CREDENTIALS = ee.ServiceAccountCredentials(service_account, EE_PRIVATE_KEY_FILE)
