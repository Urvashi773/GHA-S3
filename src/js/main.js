// Display build time
document.addEventListener('DOMContentLoaded', function() {
    const buildTimeElement = document.getElementById('build-time');
    if (buildTimeElement) {
        const now = new Date();
        buildTimeElement.textContent = now.toLocaleString();
    }
    
    // You can add commit SHA if passed via build process
    const commitElement = document.getElementById('commit-sha');
    if (commitElement) {
        // This will be replaced during build
        commitElement.textContent = 'COMMIT_SHA_PLACEHOLDER';
    }
    
    console.log('🚀 Website loaded successfully!');
    console.log('Deployed via GitHub Actions to AWS S3');
});
