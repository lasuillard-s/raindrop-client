_default:
    just --list

# Install deps and tools
install:
    npm install

# Update deps and tools
update:
    npm update
    pre-commit autoupdate

alias up := update

# =============================================================================
# Development
# =============================================================================

# Run all checks
ci: generate (format "yes") lint test

# Generate code from OpenAPI schema
generate:
    mkdir --parents ./src/generated
    pipx run 'devobs~=0.2.6' assert-diff \
        --target ./src/generated \
        -- \
        npm run generate

alias gen := generate

# Autoformat code
[arg("check", long="check", value="yes")]
format check="no":
    npm run {{ if check == "yes" { "fmt:check" } else { "fmt" } }}

alias fmt := format

# Run all linters
lint:
    npm run lint
    npm run typecheck

# Run all tests
test:
    npm run test

# Invalidate recordings and run tests to update them
test-refresh:
    rm --recursive --force ./tests/__recordings__/*
    npm run test:unit -- --update
    npm run test:type

# Apply autofixes
fix:
    npm run lint:fix
    npm run fmt

# Build all projects
build: generate
    npm run build

# Build and serve docs locally
docs:
    npm run make-docs
    npm exec http-server -- ./typedoc

# =============================================================================
# Utility
# =============================================================================

# Remove temporary files
clean:
    rm --recursive --force \
        coverage/ \
        dist/ \
        typedoc/ \
        junit.xml \
        typecheck.junit.xml
    find . -path '*.log*' -delete
